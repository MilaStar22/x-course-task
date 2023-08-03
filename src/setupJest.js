require('jest-fetch-mock').enableMocks()

jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));

import '@testing-library/jest-dom'