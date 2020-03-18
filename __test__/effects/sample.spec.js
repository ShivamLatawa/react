jest.unmock('../../app/effects/sample')
jest.mock('fetch')

import {fetchSampleData} from '../../app/effects/sample'


describe('[Effects]', () => {

	test('"fetchSampleData" should return jsonResponse', () => {

		const data = [{foo: 'bar'}]

		window.fetch = jest.fn()
		.mockImplementation(() =>
			Promise.resolve(window.mockResponse(200, null, JSON.stringify(data))))

		fetchSampleData()
		.then(res => {
			expect(res.Search).toEqual(data)
		})
	})

})
