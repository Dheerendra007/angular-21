 import { Service } from '@angular/core';

@Service()
export class UserService {
    userList(){
        return [
            { id: 1, name: 'John Doe' , email: 'john.doe@example.com' ,city: 'New York', country: 'USA' },
            { id: 2, name: 'Jane Smith' , email: 'jane.smith@example.com' ,city: 'Los Angeles', country: 'USA' },
            { id: 3, name: 'Bob Johnson' , email: 'bob.johnson@example.com' ,city: 'Chicago', country: 'USA' },
            { id: 4, name: 'Alice Williams' , email: 'alice.williams@example.com' ,city: 'Houston', country: 'USA' }
        ];
    }
}
