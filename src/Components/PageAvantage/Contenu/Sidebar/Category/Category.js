
import React, {useState} from 'react';
import './Category.css';


function Category(props) {
  const categories = [
    'All','Alimentaire', 'Animaliers', 'Art et exposition', 'Beauté', 'Commerce', 'Commerce de services',
    'Education et culture', 'Espace', 'Hotel', 'Loisirs créatifs', 'Mode', 'Shopping',
    'Spectacle & événements', 'Tourisme', 'Transports', 'Utilitaire'
  ];

  const [showAll, setShowAll] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const displayedCategories = showAll? categories : categories.slice(0, 6);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    props.onCategoryChange(event.target.value);
  };

  return (
    <div>
      <h2 className='sidebar-title'> Catégories </h2>
      {displayedCategories.map((category, index) => (
        <div key={index} className='sidebar-label-container'>
          <label>
            <input
            type="radio"
            id={category}
            name="category"
            value ={category}
            checked={props.selectedValue === category}
            onChange={handleCategoryChange}
          />
          <span className='checkmark'></span>{category}
          </label>
        </div>
      ))}
      {!showAll && (
        <button onClick={() => setShowAll(true)} className="show-more-button">
          + Voir plus
        </button>
      )}
    </div>
  );
}

export default Category;

