


ar =[
    {
        id: 1,
        year: 2011,
        name: 'Eshmat',
        status: 'student',
        key: 'test',
    },
    {
        id: 2,
        year: 2012,
        name: 'Toshmat',
        status: 'student',
        key: 'test',
    },
    {
        id: 3,
        year: 2010,
        name: 'Eshmat akasi',
        status: 'student',
        key: 'test',
    }
]
// const OnDelete = (id)=>ar.filter((value)=> value.id !==id)
// console.log(OnDelete(2));


const onSort = (key, value) => {
    const result = [];
  
    ar.map( (val) => {
      if (val['name'].includes('Eshmat')) {
        for (const kalit in val) {
          if (kalit === key) {
            result.push(val);
          }
        }
      }
    });
  
    return result;
  };
  
  console.log(onSort('name', 'Eshmat'));