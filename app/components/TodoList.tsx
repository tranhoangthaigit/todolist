"use client"

import React, { useState } from 'react';
import Task from './Task';
import { ITask } from '@/types/tasks';
import Pagination from './Pagination';

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTasks.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  return (
    <div>
      <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-sm w-full max-w-xs"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>      
    </div>
      <div className="flex justify-end pagination">
        <Pagination items={pageCount} handlePagination={handlePageChange}/>
      </div>
    </div>

  );
};

export default TodoList;
