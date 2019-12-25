import { Request, Response, Router } from 'express';
import { EmployeeController } from '../controllers/employee';
import { IResponse } from '../interface/response';
const router: Router = Router();


router.get("/", (req: Request, res: Response) => {
    EmployeeController.getEmployees().then(
        (result) => {
            const response: IResponse = {
                data: result,
                status: true
            }
            res.send(response);
        },
        (error) => {
            const response: IResponse = {
                status: false,
                error
            }
            res.send(response);
        }
    );
});

export const employeeRoute: Router = router;