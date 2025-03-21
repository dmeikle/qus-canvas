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
    GET_OUTCOME: string = `/:version/outcomes/:id`;
    LIST_OUTCOME_RESULTS_BY_COURSE: string = '/:version/courses/:course_id/outcome_results?page=:page&per_page=:size';
    LIST_OUTCOME_RESULTS_BY_STUDENTS: string =  '/:version/courses/:course_id/outcome_results?page=:page&per_page=:size';
    LIST_OUTCOMES_ROLLUP: string =  '/:version/courses/:course_id/outcome_rollups';
    LIST_OUTCOME_GROUPS_BY_COURSE: string = '/:version/courses/:course_id/outcome_groups?page=:page&per_page=:size';
}
