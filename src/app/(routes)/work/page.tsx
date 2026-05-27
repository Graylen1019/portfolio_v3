const WorkPage = ({ params }: { params: { work: string } }) => {
  const { work } = params;  

    return (
        <h1>{work}</h1>
    );
};

export default WorkPage;