import Layout from 'components/Layout';
import { GetStaticProps } from 'next';
import Airtable from 'airtable';

type Props = {
  people: {
    id: string;
    name: string;
  }[];
};

const About: React.FC<Props> = ({ people }) => {
  return (
    <Layout title="About | Blueprint">
      <div>hello about page</div>
      <ul>
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      'appWtxPqExnm5Opi3'
    );
    const roster = base('Master Roster');
    const records = await roster
      .select({ view: 'Current Members (A-Z)' })
      .all();
    const people = records.map((r) => ({
      id: r.getId(),
      name: r.get('Name'),
    }));
    console.log(people);
    return { props: { people } };
  } catch (error) {
    console.error(error);
    return { props: { error: 'error' } };
  }
};

export default About;
