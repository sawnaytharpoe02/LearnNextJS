"use client";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import React, { useRef, useState } from "react";
import {
  removeMenuCategory,
  setMenuCategory,
  updateMenuCategory,
} from "@/store/slices/menuCategorySlice";
import { v4 as uuidv4 } from "uuid";

const Menu = () => {
  const dispatch = useAppDispatch();
  const { menuCategory } = useAppSelector((state) => state.menuCategory);
  // State
  const menuRef = useRef<any>("");
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const [toUpdateDate, setToUpdateData] = useState<{
    id: string;
    name: string;
    isAvaliable: boolean;
  }>({
    id: "",
    name: "",
    isAvaliable: false,
  });
  const [newMenuName, setNewMenuName] = useState<string | null>(null);

  const handleClick = () => {
    dispatch(
      setMenuCategory({
        id: uuidv4(),
        name: menuRef.current.value,
        isAvaliable: true,
      })
    );
    menuRef.current.value = "";
  };

  const handleUpdate = () => {
    dispatch(
      updateMenuCategory({
        id: toUpdateDate.id,
        name: newMenuName as string,
        isAvaliable: toUpdateDate.isAvaliable,
      })
    );
    setIsEditForm(false);
  };

  return (
    <>
      <ul className="flex flex-col space-y-3">
        {menuCategory.map((v) => {
          return (
            <div
              key={v.id + v.name}
              className="flex gap-2 items-center justify-between">
              <li>{v.name}</li>
              <div className="flex items-center space-x-2">
                <button
                  className="border p-1 rounded-lg"
                  onClick={() => dispatch(removeMenuCategory(v))}>
                  Delete
                </button>
                <button
                  className="border p-1 rounded-lg"
                  onClick={() => {
                    setIsEditForm(true);
                    setToUpdateData({
                      id: v.id,
                      name: v.name,
                      isAvaliable: v.isAvaliable,
                    });
                  }}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="flex flex-col gap-2 border p-5 rounded-lg mt-4">
        <h3>Create Form</h3>
        <input
          ref={menuRef}
          type="text"
          placeholder="add new menu category"
          className="p-2 rounded-lg text-black"
        />
        <button onClick={handleClick}>Add MenuCategory</button>
      </div>
      {isEditForm && (
        <div className="flex flex-col gap-2 border p-5 rounded-lg">
          <h3>Edit Form</h3>
          <input
            type="text"
            value={newMenuName !== null ? newMenuName : toUpdateDate.name}
            onChange={(e) => setNewMenuName(e.target.value)}
            className="p-2 rounded-lg text-black"
          />
          <button onClick={handleUpdate}>Update MenuCategory</button>
        </div>
      )}
    </>
  );
};

export default Menu;
