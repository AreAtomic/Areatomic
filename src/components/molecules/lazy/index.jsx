const Card = () => {
    return (
        <div class="border border-purple-areatomic-300 bg-component-500 shadow rounded-md p-4 max-w-sm w-full">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-6">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                    </div>
                    <div class="h-40 bg-purple-areatomic-700 rounded"></div>
                    <div class="space-y-3">
                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="h-10 bg-purple-areatomic-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card }
