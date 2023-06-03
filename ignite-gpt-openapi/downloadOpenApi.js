const fs = require('fs');
const converter = require('swagger2openapi');
const dotenv = require('dotenv').config({ path: '../.env' });
const YAML = require('yaml');

const SUPABASE_ORIGIN = process.env.SUPABASE_ORIGIN;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const downloadOpenApi = async () => {
  let swaggerJson;

  // Download Swagger spec
  try {
    const response = await fetch(`${SUPABASE_ORIGIN}/rest/v1/`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    swaggerJson = await response.json();
  } catch (error) {
    console.error('Error downloading Swagger spec:', error);
  }
  try {
    // Convert Swagger 2 to OpenAPI 3
    const { openapi } = await converter.convertObj(swaggerJson, {
      // patch: true,
      // warnOnly: true,
    });
    fs.writeFileSync('./postgrest.yaml', YAML.stringify(openapi));
  } catch (error) {
    console.error('Error converting Swagger to OpenAPI:', error);
  }
};

downloadOpenApi();
