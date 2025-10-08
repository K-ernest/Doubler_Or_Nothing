import * as allAvatars from "../assets/Avatars/allAvatars";

// method for getting random avatars
export const pickRandomAvatar = () => {
  const avatar = "";

  let keys = Object.keys(allAvatars);
  let randomAvatar = keys[Math.floor(Math.random() * keys.length)];
  avatar = allAvatars[randomAvatar];
  return avatar
};
