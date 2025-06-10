export default async function handler(req, res) {
  try {
    const response = await fetch('https://jsonplaceholder.org/posts');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}