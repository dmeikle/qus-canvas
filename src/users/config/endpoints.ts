/*
 * MIT License
 * 
 * Copyright (c) 2024 Quantum Unit Solutions
 * Author: David Meikle
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export class Endpoints {
    LIST_USERS_BY_COURSE: string = `/:version/courses/:course_id/users?page=:page&per_page=:size`;
    //GET_ASSIGNMENT: string = '/:version/courses/:course_id';
    LIST_ASSIGNMENTS_WITH_DUE_DATES: string = '/:version/courses/:course_id/effective_due_dates';
    LIST_ASSIGNMENTS_BY_USER_AND_COURSE: string = '/v1/users/:user_id/courses/:course_id/assignments';
    GET_USER: string =  '/:version/users/:user_id';
    SEARCH_USERS: string = '/:version/accounts/:account_id/users?search_term=:term';
}
