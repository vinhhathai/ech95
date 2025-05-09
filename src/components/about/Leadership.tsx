import React from 'react';
import Section from '../ui/Section';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, description }) => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg flex flex-col items-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-200 rounded-full mb-4 sm:mb-6"></div>
      <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-1 text-center">{name}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">{position}</p>
      <div className="w-16 sm:w-20 h-0.5 bg-green-300 mb-3 sm:mb-4"></div>
      <p className="text-sm sm:text-base text-gray-700 text-center">{description}</p>
    </div>
  );
};

const Leadership = () => {
  return (
    <Section title="Đội ngũ lãnh đạo" className="bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <TeamMember 
          name="Nguyễn Văn An" 
          position="Người sáng lập & Giám đốc điều hành"
          description="Chuyên gia nông nghiệp với hơn 15 năm kinh nghiệm trong lĩnh vực nuôi trồng thủy sản."
        />
        <TeamMember 
          name="Trần Thị Bình" 
          position="Giám đốc kỹ thuật"
          description="Tiến sĩ công nghệ sinh học, chuyên gia về vi sinh và dinh dưỡng trong nuôi trồng thủy sản."
        />
        <TeamMember 
          name="Lê Văn Cường" 
          position="Giám đốc sản xuất"
          description="Kỹ sư nông nghiệp với hơn 10 năm kinh nghiệm quản lý trang trại và tối ưu hóa quy trình sản xuất."
        />
        <TeamMember 
          name="Phạm Thu Hà" 
          position="Giám đốc kinh doanh"
          description="Thạc sĩ quản trị kinh doanh, chuyên gia về phát triển thị trường và xây dựng quan hệ đối tác."
        />
      </div>
    </Section>
  );
};

export default Leadership; 