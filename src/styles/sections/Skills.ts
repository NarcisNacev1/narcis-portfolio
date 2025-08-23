export const SkillsFlexStyle = {
    width: { base: '100px', sm: '130px', md: '150px', lg: '159px' },
    height: { base: '90px', sm: '120px', md: '140px', lg: '150px' },
    backgroundColor: '#1E1E1E',
    borderRadius: '10px',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    _hover: {
        transform: 'scale(1.1) rotate(9deg)',
        backgroundColor: '#333333',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    cursor: 'arrow',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
};
