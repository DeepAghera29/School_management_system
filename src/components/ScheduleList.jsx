import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

const ScheduleList = ({ schedules }) => {
  return (
    <div className="space-y-4">
      {schedules.map((schedule) => (
        <div key={schedule._id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">{schedule.subject}</h3>
            <span className="text-sm text-gray-500">
              {schedule.grade} - {schedule.section}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{schedule.topic}</p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{format(new Date(schedule.date), 'PPP')}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{schedule.startTime} - {schedule.endTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;