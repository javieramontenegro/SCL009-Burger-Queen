import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

import ButtonElection from '../ButtonElect';



describe('<ButtonElection />', () => {
   it('renders <ButtonElection /> component', () => {
      
      shallow(<ButtonElection />);
    });

      
    it('Deberia encontrar btn-election en ButtonElection', () => {
      const name = shallow(<ButtonElection />);
				
      expect(name.find('.btn-election').length).toBe(2);
		});
		

		it('Debería devolver categoria almuerzo al clickear  ', () => {
			const wrapper = shallow(<ButtonElection />);

			wrapper.find('button').at(1).simulate('click')
			expect(wrapper.state().list).toMatchSnapshot()
		});
  
});
