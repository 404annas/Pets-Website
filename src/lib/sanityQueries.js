import { client } from './sanity';

export const POODLE_ASSETS_QUERY = `
  {
    "ricky": {
      "pictures": *[_type == "rickyPictures"][0]{
        mainImage,
        gallery
      },
      "videos": *[_type == "rickyVideos"][0]{
        videos[]{
          asset->{
            url
          }
        }
      }
    },
    "yan": {
      "pictures": *[_type == "yanPictures"][0]{
        mainImage,
        gallery
      },
      "videos": *[_type == "yanVideos"][0]{
        videos[]{
          asset->{
            url
          }
        }
      }
    },
    "danDan": {
      "pictures": *[_type == "danDanPictures"][0]{
        mainImage,
        gallery
      },
      "videos": *[_type == "danDanVideos"][0]{
        videos[]{
          asset->{
            url
          }
        }
      }
    }
  }
`;

export async function fetchPoodleAssets() {
  return await client.fetch(POODLE_ASSETS_QUERY);
}
