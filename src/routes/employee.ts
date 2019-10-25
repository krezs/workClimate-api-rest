import { Request, Response, Router } from 'express';
const router: Router = Router();


router.get("/", (req: Request, res: Response) =>{
    res.json("Employee's");
});

export const employeeRoute: Router = router;