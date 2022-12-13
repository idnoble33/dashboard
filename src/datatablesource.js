//temporary data

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: params => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" alt="avatar" src={params.row.img} />
          {params.row.username}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: params => {
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
    },
  },
];
export const userRows = [
  {
    id: 111,
    username: 'snow',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: '1snow33@gmail.com',
    age: 36,
  },
  {
    id: 222,
    username: 'noble',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'passive',
    email: 'noble247@gmail.com',
    age: 65,
  },
  {
    id: 333,
    username: 'Mikekke',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'pending',
    email: '1Mikekke@gmail.com',
    age: 40,
  },
  {
    id: 444,
    username: 'whale',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: 'whale247@gmail.com',
    age: 45,
  },
  {
    id: 555,
    username: 'lionheart',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'passive',
    email: 'lionheart33@gmail.com',
    age: 45,
  },
  {
    id: 666,
    username: 'pelepele',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: 'pelepele@gmail.com',
    age: 45,
  },
  {
    id: 777,
    username: 'blocksolid',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'passive',
    email: 'blocksolid@gmail.com',
    age: 48,
  },
  {
    id: 888,
    username: 'mountain',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: 'mountain@gmail.com',
    age: 50,
  },
  {
    id: 999,
    username: 'seedland',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'pending',
    email: 'seedland@gmail.com',
    age: 55,
  },
  {
    id: 1010,
    username: 'crazydev',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress$cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: 'crazydev@gmail.com',
    age: 58,
  },
];
