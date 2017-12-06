import React from 'react';
import ReactDom from 'react-dom';
import Menu from '../components/menu/Menu';
import MenuContainer from '../components/menu/MenuContainer';
import MenuItem from '../components/menu/MenuItem';
import MenuTitle from '../components/menu/MenuTitle';
import Category from '../components/category/Category';
import CategoryItem from '../components/category/Item';
import '../style.css';

class Index extends React.Component {

  render() {
    return (
      <div className="ui-container">
        <div className="ui-header"/>
        <div className="ui-content">
          <div className="menu">
            <main className="menu-main">
              <Category>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
                <CategoryItem title='热销' icon='https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/'/>
              </Category>
              <MenuContainer>
                <Menu>
                  <MenuTitle label='热销，大家喜欢吃，才叫真好吃。' name='热销' desc='大家喜欢吃，才叫真好吃。'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                </Menu>
                <Menu>
                  <MenuTitle label='热销，大家喜欢吃，才叫真好吃。' name='热销' desc='大家喜欢吃，才叫真好吃。'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                  <MenuItem label='香汁排骨饭汤套餐，原价31.5元，现价31.5元。' imgSrc='https://fuss10.elemecdn.com/f/bc/ff204629d84b01a049b5c0fc810e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' imgAlt='香汁排骨饭汤套餐' imgTitle='香汁排骨饭汤套餐' name='香汁排骨饭汤套餐' desc='香汁排骨饭×1竹丝（乌）鸡汤×1田园彩豆×1' sales='月售350份' praise='好评率97%' salesInfo='31.5'/>
                </Menu>
              </MenuContainer>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Index/>, document.getElementById('root'));
