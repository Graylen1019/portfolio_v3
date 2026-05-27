const WorkInPage = ({ params }: { params: { work: string } }) => {
  const { work } = params;  

    return (
        <h1>{work}</h1>
    );
};

export default WorkInPage;