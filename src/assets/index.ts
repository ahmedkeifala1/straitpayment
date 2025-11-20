import Members from "./data/members.json";

type Member = {
  name: string;
  position: string;
  image: string;
  slug: string;
};

export const members: Array<Member> = Members as Array<Member>;
