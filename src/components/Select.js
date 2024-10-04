import React, { useState, useEffect } from 'react';
import './select.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';


const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  useEffect(() => {
    setListData(data);
    setListData2(data);
  }, [data]);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });

    setListData(list);
  };

  return (
    <div className="selectDrop cursor position-relative">
      {icon}
      <span className="openSelect" onClick={openSelect}>
        {selectedItem}
        <ArrowDropDownIcon className="arrow" />
      </span>
      {isOpenSelect && (
        <div className="selectDrops">
          <div className="searchField">
            <input type="search" placeholder="Search" onChange={filterList} />
          </div>
          <ul className="searchResults">
            {listData.map((item, index) => (
              <li
                key={index}
                onClick={() => closeSelect(index, item)}
                className={`${selectedIndex === index ? 'active' : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
