import React from "react";
import { ReactComponent as StarIcon } from "assets/svg/star.svg";
import { nFormatter } from "utils";

interface CardProps {
  avatar: string;
  stars: number;
  fullName: string;
  repoLink: string;
  description: string;
  owner: string;
}

const Card: React.FC<CardProps> = ({
  avatar,
  stars,
  fullName,
  repoLink,
  description,
  owner,
}) => {
  return (
    <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500" data-testid="card">
      <div className="mt-4">
        <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
          <a href={repoLink}>{fullName}</a>
        </h1>
        <div className="flex items-center mt-2">
          <StarIcon /> {nFormatter(stars, 1)}
        </div>
        <p className="mt-4 text-md text-gray-600 min-w-104 h-12">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="mt-4 flex items-center space-x-4 py-6">
            <div className="">
              <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
            </div>
            <div className="text-sm font-semibold">{owner} •</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card