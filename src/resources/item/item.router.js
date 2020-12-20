import { Router } from 'express'

const router = Router()



router.route('/').get(() => {
    console.log('/ get route')
}).post(() => {
    console.log('/ post route')
})

router.route('/:id').get(() => {
    console.log('/:id get')
})
.delete(() => {
    console.log('/:id delete')
}).put(() => {
    console.log('/:id post')
})
export default router