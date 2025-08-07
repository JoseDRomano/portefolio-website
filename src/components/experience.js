import React from 'react';

const events = [
    {
        type: 'Education',
        title: 'NOVA SST',
        subtitle: "Master's in Computer Engineering",
        extra: 'Major in Artificial Intelligence',
        startDate: '2023-10',
        endDate: '2025-11',
    },
    {
        type: 'Experience',
        title: 'Unipartner',
        subtitle: 'Data & AI Trainee',
        startDate: '2023-11',
        endDate: '2024-03',
    },
    {
        type: 'Education',
        title: 'NOVA SST',
        subtitle: "Bachelor's in Computer Science and Engineering",
        startDate: '2020-10',
        endDate: '2023-07',
    },
    {
        type: 'Experience',
        title: 'Polarising',
        subtitle: 'Backend Developer',
        startDate: '2023-07',
        endDate: '2023-08',
    },
];

const Experience = () => {
    const startDate = new Date('2020-10-01');
    const endDate = new Date('2025-11-30');
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();

    const calculateTimelinePosition = (start, end) => {
        const eventStart = new Date(`${start}-01`);
        const eventEnd = new Date(`${end}-01`);
        
        const monthsFromStart = (eventStart.getFullYear() - startDate.getFullYear()) * 12 + eventStart.getMonth() - startDate.getMonth();
        const duration = (eventEnd.getFullYear() - eventStart.getFullYear()) * 12 + eventEnd.getMonth() - eventStart.getMonth();
        
        const topPosition = (monthsFromStart / totalMonths) * 100;
        const height = (duration / totalMonths) * 100;
        
        return { top: `${topPosition}%`, height: `${height}%` };
    };

    return (
        <div className="w-full px-4 py-24">
            <h2 className="text-5xl font-bold text-center mb-24 tracking-tight">
                Experience & Education
            </h2>
            <div className="max-w-6xl mx-auto relative">
                <div className="absolute left-1/2 h-[120vh] w-1 bg-gray-200 transform -translate-x-1/2">
                    {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                        <div 
                            key={year}
                            className="absolute transform -translate-x-full -translate-y-1/2 right-4 text-sm font-medium text-gray-500"
                            style={{ top: `${((year - 2020) * 12) / totalMonths * 100}%` }}
                        >
                            {year}
                        </div>
                    ))}
                </div>

                <div className="relative min-h-[120vh]">
                    {events.map((event, index) => {
                        const isEducation = event.type === 'Education';
                        const position = calculateTimelinePosition(event.startDate, event.endDate);
                        
                        return (
                            <div
                                key={index}
                                className={`absolute w-[40%] ${isEducation ? 'right-[52%]' : 'left-[52%]'}`}
                                style={{
                                    top: position.top,
                                    height: position.height,
                                    minHeight: '80px'
                                }}
                            >
                                <div className={`h-full backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 p-4 ${
                                    isEducation 
                                        ? 'bg-red-100/30 border-red-500'
                                        : 'bg-blue-100/30 border-blue-500'
                                }`}>
                                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mb-3 ${
                                        isEducation ? 'bg-red-200 text-red-600' : 'bg-blue-200 text-blue-600'
                                    }`}>
                                        {event.type}
                                    </span>
                                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                                    <p className="font-medium">{event.subtitle}</p>
                                    {event.extra && (
                                        <p className="text-sm italic text-gray-700 mt-1">{event.extra}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience; 