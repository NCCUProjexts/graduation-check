const registerHistoryReducer = (attr) => {
  let notRegNum = 0;
  for (let i = 1; i <= attr.length; i += 1) {
    if (attr[attr.length - i].regsts !== '註冊') {
      notRegNum += 1;
    }
    if (i === attr.length
      || attr[attr.length - i].deptID !== attr[attr.length - i - 1].deptID) {
      const regDept = attr[attr.length - i];
      const { deptID } = regDept;
      const { group } = regDept;
      const regNum = (i - notRegNum) + (regDept.grade - 1) * 2 - (regDept.semester - 1);
      const regYear = regDept.year - (regDept.grade - 1);
      return {
        main: true,
        type: 'major',
        deptID,
        group,
        year: regYear,
        regNum,
      };
    }
  }
  return undefined;
};

export default registerHistoryReducer;
