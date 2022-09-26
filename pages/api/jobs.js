import { connectToDatabase } from '../../db/mongodb';

const mongo = async (_req, res) => {
  const { db } = await connectToDatabase();
  const jobs = await db
    .collection('jobs')
    .find({})
    .toArray();
  res.json(jobs);

  return {
    props: {
      jobs: JSON.parse(JSON?.stringify(jobs))
    }
  };
};

export default mongo;
