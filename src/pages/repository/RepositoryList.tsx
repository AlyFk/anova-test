import { Card, ErrorAlert, Pagination, Spinner } from "components";
import { useRepositoryData } from "hooks/useRepositoryData/useRepositoryData";
import React from "react";

interface RepositoryListProps {
  name: string;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ name }) => {
  const { data, isLoading, setPage, isError, error } = useRepositoryData(name);

  if (isLoading) return <Spinner />;
  if (isError) {
    if (error instanceof Error) {
      return <ErrorAlert title="Error" message={error.message} />;
    }
  }

  return (
    <>
      {data && (
        <>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 justify-items-center mt-12 mb-4 border-t-2 border-gray-200 pt-8">
            {data?.items.map((item) => (
              <Card
                owner={item.owner.login}
                key={item.id}
                description={item.description}
                avatar={item.owner.avatar_url}
                stars={item.stargazers_count}
                fullName={item.full_name}
                repoLink={item.html_url}
              />
            ))}
          </div>
          <Pagination
            setPage={setPage}
            key={name}
            allItems={Math.ceil(data?.total_count! / 30)}
          />
        </>
      )}
    </>
  );
};

export default RepositoryList;
