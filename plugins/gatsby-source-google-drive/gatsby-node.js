const googleapi = require(`./googleapis`);

const {
  createFileNodeFromBuffer
} = require("gatsby-source-filesystem");

const FOLDER = `application/vnd.google-apps.folder`;

exports.sourceNodes = async ({
  actions:{createNode},
  createNodeId,
  createContentDigest,reporter
}, configOptions) => {
  
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  const {
    serviceAccountEmail,
    folderId
  } = configOptions;

  // Needed to add keys to Netlify's environment variable UI
  // https://stackoverflow.com/questions/36636245/error-signing-jwt-using-rsa-private-key-loaded-from-env-file-via-heroku-foreman
  const key = configOptions.key.replace(/\\n/g, '\n');

  // Get token and fetch root folder.
  const {
    access_token: token
  } = await googleapi.getToken(key, serviceAccountEmail);

  const cmsFiles = await googleapi.getFolder(folderId, token);
  for (const file of cmsFiles) {

    if (file.mimeType !== FOLDER) {

      const nodeId = createNodeId(`drive-file-${file.id}`);

      const resp = await googleapi.getFileData(file.id, token);
      const fileData = await googleapi.getFile(file.id, token);
      const nodeContent = JSON.stringify(file);
      const {
        createdTime
      } = JSON.parse(resp);
      console.log('Downloaded ' + file.name)
      const node =  {
        id: nodeId,
        parent: `__SOURCE__`,
        children: [],
        value: fileData.toString('base64'),
        createdTime,
        internal: {
          type: `DriveNode`,
          mediaType: file.mimeType,
          content: nodeContent,
          contentDigest: createContentDigest(file)
        },
        name: file.name
      };
      createNode({
        ...node,...file
      });
    }
  }
  return
};

exports.onCreateNode = async function ({
  node,
  cache,
  actions:{createNode,createNodeField},
  store,
  reporter,
  createNodeId
}) {

  if (node.internal.type === `DriveNode`) {

    const {
      name,
      value
    } = node;

    const buf = Buffer.from(value, 'base64')

    try {

      const fileNode = await createFileNodeFromBuffer({
        buffer: buf,
        cache,
        parentNodeId:node.id,
        reporter,
        createNode,
        createNodeId,
        store
      })
      if (fileNode) {
        node.localFile___NODE = fileNode.id;
        const slug = name.slice(name.length - 30, name.length).toLowerCase().replace(/\W+/g, '-');
        createNodeField({
          node,
          name: 'slug',
          value: slug
        });
      }

    } catch (e) {
      reporter.error(e);
      console.log(`Error creating remote file`, e);
    }
  }
};