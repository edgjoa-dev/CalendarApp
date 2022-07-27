import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouterAuth } from '../auth/RouterAuth'

export const AppRouters = () => {
    return (
        <div>
            <Routes>
                <Route path="/auth/*" element={<RouterAuth />} />
            </Routes>
            AppRouters
        </div>
    )
}
