import React from 'react';

export interface IResumeBox {
    schoolName?: string,
    degree?: string,
    fromYear?: string,
    toYear?: string,
    description?: string,
    icon?: React.ReactNode,
    type: 'education' | 'work',
}
