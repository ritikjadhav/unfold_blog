import React from 'react';
import { ButtonProps } from '../common/types/auth';

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
            onClick={onClick}
        >
            {label}
        </button>
    );
};