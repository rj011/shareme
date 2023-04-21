import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import { Category } from '@mui/icons-material'


const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row'
    sx ={{
        overflowY: 'auto',
        height: {sx: 'auto',md: '95%' },
        flexDirection: {md: 'column'}, 
    }}
    
    >
        {categories.map((category) => (
            <button 
            className='category-btn'
            onClick={()=> setSelectedCategory(category.name)}
            style={{ background: category.name === selectedCategory && '#7600bc',
            color: 'white'
            }}
            key={category.name}
            >
                <span style={{color: category.name === selectedCategory? 'white' : '#00ff00', marginRight: '15px'}}>{category.icon}</span>
                <span>{category.name}</span>

            </button>
        ))}

    </Stack>
  )
}

export default Sidebar