import * as allAvatars from "../assets/Avatars/allAvatars";
import { Chance } from "chance";

const chance = new Chance();


// method for generating random name for players 
export const generateRandomName = (maxLength = 7, options = {}) => {
  let name = chance.name(options);

  // if name is to long, fallback to first + last 
  if (name.length > maxLength) {
    const first = chance.first(options);
    const last = chance.last(options);
    name = ` ${first} ${last} `;
  }

  // final trim if name is still to long 
  return name.length <= maxLength ? name : name.slice(0, maxLength)
}


// method for getting random avatars
export const pickRandomAvatar = () => {
  let avatar = "";

  let keys = Object.keys(allAvatars);
  let randomAvatar = keys[Math.floor(Math.random() * keys.length)];
  return avatar = allAvatars[randomAvatar];
};
