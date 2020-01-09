import HomeController from '../api/controllers/home-controller'
import LoginController from '../api/controllers/login-controller'
import ErrorController from '../api/controllers/error-controller'
import DepartmentController from '../api/controllers/department-controller'
import DistrictController from '../api/controllers/district-controller'

export let controllers = [
  new HomeController(),
  new LoginController(),
  new ErrorController(),
  new DepartmentController(),
  new DistrictController(),
]