import React from 'react';
import Section from '../ui/Section';

interface ValueCardProps {
  number: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg flex flex-col items-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
        <span className="text-white text-xl sm:text-2xl font-bold">{number}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center text-sm sm:text-base">{description}</p>
    </div>
  );
};

const CoreValues = () => {
  return (
    <Section title="Giá trị cốt lõi" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <ValueCard 
          number="1" 
          title="Chất lượng" 
          description="Luôn đảm bảo sản phẩm ếch sạch, an toàn và có chất lượng ổn định cho người tiêu dùng."
        />
        <ValueCard 
          number="2" 
          title="Cải tiến" 
          description="Thường xuyên học hỏi và cải tiến phương pháp nuôi ếch để nâng cao hiệu quả."
        />
        <ValueCard 
          number="3" 
          title="Thân thiện" 
          description="Nuôi ếch theo phương pháp thân thiện với môi trường và có trách nhiệm với cộng đồng."
        />
        <ValueCard 
          number="4" 
          title="Uy tín" 
          description="Luôn thật thà về nguồn gốc và chất lượng sản phẩm để xây dựng lòng tin với khách hàng."
        />
      </div>
    </Section>
  );
};

export default CoreValues; 