import React from 'react';
import { FileText, Clock, Upload } from 'lucide-react';
import { format } from 'date-fns';

const AssignmentList = ({ assignments, onSubmit, submissions }) => {
  return (
    <div className="space-y-4">
      {assignments.map((assignment) => {
        const submission = submissions?.find(s => s.assignment._id === assignment._id);
        const dueDate = new Date(assignment.dueDate);
        const isPastDue = dueDate < new Date();

        return (
          <div key={assignment._id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-medium text-gray-900">{assignment.title}</h3>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                submission?.status === 'Graded' 
                  ? 'bg-green-100 text-green-800'
                  : submission?.status === 'Submitted'
                  ? 'bg-yellow-100 text-yellow-800'
                  : isPastDue
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {submission?.status || (isPastDue ? 'Overdue' : 'Pending')}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{assignment.description}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>Due: {format(dueDate, 'PPP')}</span>
              </div>
              
              {!submission && !isPastDue && (
                <button
                  onClick={() => onSubmit(assignment)}
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Submit
                </button>
              )}
              
              {submission?.status === 'Graded' && (
                <div className="text-green-600 font-medium">
                  Score: {submission.marks}/{assignment.maxMarks}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AssignmentList;