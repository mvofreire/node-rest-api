import Controller from 'app/api/controller'

class UserController extends Controller
{
    model = "app/models/User";
}

export default ('user', UserController)