import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../../../contexts/CategoryContext';
import CategoryForm from './CategoryForm';

function UpdateCategory({updateCategory}) {
    const Params = useParams();
    const { id } = Params;
    const { catData } = useContext(CategoryContext);
    const categoryById = catData && catData.filter((item) => {
        return (item.id == id)
    })

    const def_val= {
        name:categoryById[0]?.category_name,
        description:categoryById[0]?.category_description,
        image:categoryById[0]?.category_image
    }
    return (
        <>

            <div>
                <CategoryForm createCategory={updateCategory} btnTitle='Update' defaultValue={def_val} CategoryTitle="Update Category" />
            </div>
        </>
    )
}

export default UpdateCategory
