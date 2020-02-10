import React from 'react';
import { shallow } from 'enzyme';
import FormComp from './FormComp';


describe('<FormComp />', () => {
  it('renders default without crashing', () => {
    shallow(<FormComp />);
  });

  it('renders with components without crashing', () => {
    shallow(<FormComp label={'test label'} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')} onKeyDown={() => alert('onKeyDown')}/>);
  });

  it('recieves expected values', () => {
    const wrapper = shallow(<FormComp label={'test label'} value={'test valllue'} />);
    expect(wrapper.contains(<div>test label</div>)).to.equal(true);
    expect(wrapper.contains(<input type="text" value="test valllue"/>)).to.equal(true);
  });

  it('simulates click events', () => {
    let i = 0;
    const onClick = i++;
    const wrapper = shallow(<FormComp onClick={onClick}/>);
    wrapper.find('div').simulate('click');
    expect(i).to.equal(1);
    wrapper.find('input').simulate('click');
    expect(i).to.equal(2);
  });
});