// import { v4 as uuid } from 'uuid';
// import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "2e8c8fc8-383f-4f51-8f64-850bcced6e20",
    pic: "",
    content: "First Post🥳",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "asassdafdgdk",
          firstName: "Raunak",
          lastName: "Raj",
          username: "raunakraj299@gmail.com",
          password: "123456789",
          createdAt: "2022-01-25T10:38:12+05:30",
          updatedAt: "2022-05-17T10:33:36+05:30",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509808/profile3_uflm4z.jpg",
          bio: "Aspiring Software Developer",
          followers: [],
          following: [],
          bookmarks: [],
          id: "1",
        },
        {
          _id: "d04df361-b79d-4e71-a6a1-b70a9f9987cb",
          createdAt: "2023-01-01T14:48:55+05:30",
          updatedAt: "2023-01-01T14:48:55+05:30",
          username: "akarshitak@gmail.com",
          password: "123456789",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672564959/profile5_olcnqw.jpg",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "10",
        },
        {
          _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
          createdAt: "2023-01-01T00:03:40+05:30",
          updatedAt: "2023-01-01T00:03:40+05:30",
          username: "johndoe@gmail.com",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
          password: "123456789",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "9",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "0769526f-8617-48be-8574-49b9aed90986",
        content: "cool",
        userData: {
          _id: "d04df361-b79d-4e71-a6a1-b70a9f9987cb",
          createdAt: "2023-01-01T14:48:55+05:30",
          updatedAt: "2023-01-01T14:48:55+05:30",
          username: "akarshitak@gmail.com",
          password: "123456789",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672564959/profile5_olcnqw.jpg",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "10",
        },
        username: "akarshitak@gmail.com",
        votes: {
          upvotedBy: [
            {
              _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
              createdAt: "2023-01-01T00:03:40+05:30",
              updatedAt: "2023-01-01T00:03:40+05:30",
              username: "johndoe@gmail.com",
              pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
              password: "123456789",
              firstname: "",
              lastname: "",
              followers: [],
              following: [],
              bookmarks: [],
              id: "9",
            },
          ],
          downvotedBy: [],
        },
        createdAt: "2023-01-01T15:07:58+05:30",
        updatedAt: "2023-01-01T15:07:58+05:30",
      },
      {
        _id: "2d3d7924-e2dc-4ccd-b32e-2d2d2e3575e2",
        content: "nice.. keep working",
        userData: {
          _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
          createdAt: "2023-01-01T00:03:40+05:30",
          updatedAt: "2023-01-01T00:03:40+05:30",
          username: "johndoe@gmail.com",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
          password: "123456789",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "9",
        },
        username: "johndoe@gmail.com",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: "2023-01-01T15:09:22+05:30",
        updatedAt: "2023-01-01T15:09:22+05:30",
      },
    ],
    userPic:
      "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509808/profile3_uflm4z.jpg",
    userId: "asassdafdgdk",
    username: "raunakraj299@gmail.com",
    createdAt: "2023-01-01T15:06:14+05:30",
    updatedAt: "2023-01-01T15:09:33+05:30",
    id: "1",
  },
  {
    _id: "cfce77a0-8717-4268-a101-69d20a08e935",
    pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672566146/Qkart_xwruqt.png",
    content: "My first react app: http://qkart-demo.netlify.app/ ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "d04df361-b79d-4e71-a6a1-b70a9f9987cb",
          createdAt: "2023-01-01T14:48:55+05:30",
          updatedAt: "2023-01-01T14:48:55+05:30",
          username: "akarshitak@gmail.com",
          password: "123456789",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672564959/profile5_olcnqw.jpg",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "10",
        },
        {
          _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
          createdAt: "2023-01-01T00:03:40+05:30",
          updatedAt: "2023-01-01T00:03:40+05:30",
          username: "johndoe@gmail.com",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
          password: "123456789",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "9",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "b1758993-0c52-4014-bc0f-9706865b0d79",
        content: "keep it up",
        userData: {
          _id: "d04df361-b79d-4e71-a6a1-b70a9f9987cb",
          createdAt: "2023-01-01T14:48:55+05:30",
          updatedAt: "2023-01-01T14:48:55+05:30",
          username: "akarshitak@gmail.com",
          password: "123456789",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672564959/profile5_olcnqw.jpg",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "10",
        },
        username: "akarshitak@gmail.com",
        votes: {
          upvotedBy: [
            {
              _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
              createdAt: "2023-01-01T00:03:40+05:30",
              updatedAt: "2023-01-01T00:03:40+05:30",
              username: "johndoe@gmail.com",
              pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
              password: "123456789",
              firstname: "",
              lastname: "",
              followers: [],
              following: [],
              bookmarks: [],
              id: "9",
            },
          ],
          downvotedBy: [],
        },
        createdAt: "2023-01-01T15:08:12+05:30",
        updatedAt: "2023-01-01T15:08:12+05:30",
      },
      {
        _id: "3ad6f8e0-604f-40f9-8c25-1450df13ca0c",
        content: "Great",
        userData: {
          _id: "ad46e0ab-ac37-4591-b800-6bd85bfc0091",
          createdAt: "2023-01-01T00:03:40+05:30",
          updatedAt: "2023-01-01T00:03:40+05:30",
          username: "johndoe@gmail.com",
          pic: "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509694/profile1_upm9cg.jpg",
          password: "123456789",
          firstname: "",
          lastname: "",
          followers: [],
          following: [],
          bookmarks: [],
          id: "9",
        },
        username: "johndoe@gmail.com",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: "2023-01-01T15:10:02+05:30",
        updatedAt: "2023-01-01T15:10:02+05:30",
      },
    ],
    userPic:
      "https://res.cloudinary.com/ducugiwdi/image/upload/v1672509808/profile3_uflm4z.jpg",
    userId: "asassdafdgdk",
    username: "raunakraj299@gmail.com",
    createdAt: "2023-01-01T15:06:54+05:30",
    updatedAt: "2023-01-01T15:10:08+05:30",
    id: "2",
  },
];
