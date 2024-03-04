import React from 'react';
import './Kids.css'
function Kids() {
  return (
    <div className='product-container'>
      
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTK6qHWLUM_I-w8tgVA6ogW5h3dIKU1dt1Q4btp8I5NC2ksvwA0eBZyiJQudKWA3MPadk&usqp=CAU" alt="boy's Jacket" />
        <h3>Boys Colourblocked Hooded</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>$110</span>
          <span style={{ color: 'black' }}>$34</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div  className='product'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBmq6TCxelrGSRq-89YBuWUCX-3LxXruv9Ny2hRURi59TkPjESjhhFPyn6Nd2gpWOzZw&usqp=CAU" alt="Boy's jacket" />
      <h3>Boys Colourblocked Hooded</h3>
      <div>
        <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$12</span>
        <span style={{ color:'black'}}>$61</span>
        <div className='product-button'>Add to Cart</div>

      </div>
      </div>
      <div className='product'>
        <img src="https://imagescdn.planetfashion.in/img/app/product/6/690367-7393066.jpg?auto=format&w=494.40000000000003" alt="Boys jacket" />
        <h3>Shirt</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$34</span>
          <span style={{ color:'black'}}>$12</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxX1qIVMoewsWbVCBozRmXGWtXW_RvII-iE7_jGQsJCd0nz9l42EUBgX3-kBc3uoV9Ic&usqp=CAU" alt="Boys jacket" />
        <h3>Shirt</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$15</span>
          <span style={{ color:'black'}}>$12</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
     < div className='product'>
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDSh7M8DA08uEfsUrl3_ZYuAA7fjK1m4gp3Gfny_uP495rKKzi-O0Kq28LabgC-pQerLQVvXsTiKC9AxJUS93RqLxnTyoXNDnhPtqgCkE06te1yAumd-6t" alt="Girls jacket" />
        <h3>Frock</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$99</span>
          <span style={{ color:'black'}}>$56</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS93ydDwKBx-cGsHNrcLb14jxtxcQeW8IhC0j4u_bmJT9itMUKQWu4wzXOvG1nU-XAdCaK2WRaXhXCZ-IKAdKWLzKnjHn5X9zZChY6E29ez6M0UxvGjvUVm" alt="girls jacket" />
        <h3>Frock</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$100</span>
          <span style={{ color:'black'}}>$67</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="data:image/jpeg;base64,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"
 alt="girls jacket" />
        <h3>Frock</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$102</span>
          <span style={{ color:'black'}}>$67</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4OBDYaUQagDBcvuLjbfdcsm-lHYGllNWxbRY7YAI6JIQtDq4GKDHYrc6mPKbvroo7co&usqp=CAU" alt="girls jacket" />
        <h3>Frock</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$120</span>
          <span style={{ color:'black'}}>$56</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qxB-XBOwKHl4sgqbqxlCI5OIeVHjWP7E5wV6bXaCupt5WnIhT2le5h_W9051nPtTRF4&usqp=CAU" alt="boysjacket" />
        <h3>Boys Colourblocked Hooded</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$19</span>
          <span style={{ color:'black'}}>$62</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMvxtkAR2zWD1QiH0jXJ3J1_5IHOW0CDyvIcaxXbUm2wP8UPfliiBpapKh6jKcUqFKeo&usqp=CAU" alt="Boys jacket" />
        <h3>Boys Colourblocked Hooded</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$56</span>
          <span style={{ color:'black'}}>$110</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguEwN7yIGm_SDERXlY6vXx9LyHtCW7lS3QM_iRxArt4ZgbYtU8b9-leg-H_VQWPNrQaA&usqp=CAU" alt="Boys jacket" />
        <h3>Shirt</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$67</span>
          <span style={{ color:'black'}}>$110</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFL_mVw0k6Z23W5G6HOUgPPwddD-kkWpRodnYEop4NU3eQKu4GBzKZvRrgYkTc9jqDqZk&usqp=CAU" alt="girls jacket" />
        <h3>Top</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$67</span>
          <span style={{ color:'black'}}>$108</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCNV-peHm5yVBX91E9gj-fb4KWIYm8jb8uJc90gHPrAxroYgRkKiE8XaJVYTGeUGJP6U&usqp=CAU" alt="girls jacket" />
        <h3>Top</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$53</span>
          <span style={{ color:'black'}}>$108</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcC4L1elYGjHkQbQ-44-qVICRKNsnm1VqW6psKSwqfBMGknNIyF3WQ1_89p8JHRtzcrg&usqp=CAU" alt="boys jacket" />
        <h3>Shirt</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$15</span>
          <span style={{ color:'black'}}>$112</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbkhfBrKpnPd3hREAWpIcNpQWo7kDJO6LmfS_r5wP-USi4K7wSp4P-MitFKRqgNIcKMs&usqp=CAU" alt="girls jacket" />
        <h3>Top</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$180</span>
          <span style={{ color:'black'}}>$45</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIkEIsqEHvh1UAk7wstv-jDAXSKynmFBSe3rsGfBA3VSltUus3x-MyOlAV0WxLhMsg5k&usqp=CAU" alt="girls jacket" />
        <h3>Top</h3>
        <div>
          <span style={{ textDecoration: 'line-through', marginRight:'5px'}}>$120</span>
          <span style={{ color:'black'}}>$102</span>
          <div className='product-button'>Add to Cart</div>

        </div>
      </div>
      
      
    </div>
  );
}

export default Kids;
