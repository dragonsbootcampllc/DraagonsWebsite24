// types.ts
export type Talent = {
    Name: string;
    personal_photo: string;
    tags: {
      position: string;
      city: string;
      Food: string;
      joinDate: string;
      JoinYear: number;
    }[];
    Link_profile_Linkedin: string;
    Link_profile_Github: string;
    Link_profile_Discord: string;
    isBoard: boolean;
    isRecommended: boolean;
    isMaintainer: boolean;
  };
  
  export type TransformedTalent = {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
  



// useTransformTalentData.ts
import { useMemo } from 'react';

const useTransformTalentData = (talents: Talent[]): TransformedTalent[] => {
    return talents.slice(0, 10).map((talent, index) => ({
        id: index + 1,
        name: talent.Name,
        designation: `${talent.tags[0]?.position} Developer`,
        image: talent.personal_photo,
        Link_profile_Linkedin: talent.Link_profile_Linkedin,
    }));
};

export default useTransformTalentData;
