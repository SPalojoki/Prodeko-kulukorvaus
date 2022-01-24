import axios from 'axios';
const baselUrl = '/api/hello';


const hello = async () => {
  const response = await axios.get(baselUrl);
  console.log(response);
};

export default { hello };