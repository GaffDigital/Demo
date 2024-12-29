import React from 'react';
import { Phone, Mail, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-medium text-gray-900">Jeremey Gaff</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:660-349-9942" className="text-lg font-medium text-gray-900 hover:text-blue-600">
                660-349-9942
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:gaffdigital@gmail.com" className="text-lg font-medium text-gray-900 hover:text-blue-600">
                gaffdigital@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;