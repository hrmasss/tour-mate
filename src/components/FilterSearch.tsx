import { cn } from "@/lib/utils";
import { Box, Button, Select, Text } from "@mantine/core";
import { IconSearch, IconCalendar, IconLocation } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

export default function FilterSearch({ className }: { className?: string }) {
    return (
        <div className={cn(className, "w-full max-w-5xl z-30")}>
            <div className="mt-7 sm:mt-12 mx-auto relative">
                <form>
                    <div className="relative z-10 flex gap-x-3 p-3 border rounded-3xl md:rounded-full shadow-lg bg-white flex-col md:flex-row gap-4">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center py-2 md:px-6">
                            <Box
                                c="gray"
                                className="w-full">
                                <Select
                                    classNames={{
                                        input: "z-50 text-nowrap w-full",
                                        label: "translate-x-2.5",
                                    }}
                                    leftSection={
                                        <IconLocation className="size-4" />
                                    }
                                    label="Destination"
                                    placeholder="Select your destination"
                                    variant="unstyled"
                                    data={[
                                        "St. Martin",
                                        "Sajek Valley",
                                        "Cox's Bazar",
                                        "Sylhet",
                                    ]}
                                />
                            </Box>

                            <Box
                                c="gray"
                                className="w-full">
                                <DatePickerInput
                                    classNames={{
                                        input: "z-50 text-nowrap w-full",
                                        label: "translate-x-2.5",
                                    }}
                                    leftSection={
                                        <IconCalendar className="size-4" />
                                    }
                                    leftSectionPointerEvents="none"
                                    label="Check in"
                                    placeholder="Pick a date"
                                    variant="unstyled"
                                    radius="xl"
                                />
                            </Box>

                            <Box
                                c="gray"
                                className="w-full">
                                <DatePickerInput
                                    classNames={{
                                        input: "z-50 text-nowrap w-full",
                                        label: "translate-x-2.5",
                                    }}
                                    leftSection={
                                        <IconCalendar className="size-4" />
                                    }
                                    leftSectionPointerEvents="none"
                                    label="Check out"
                                    placeholder="Pick a date"
                                    variant="unstyled"
                                    radius="xl"
                                />
                            </Box>
                        </div>

                        <div>
                            <Button
                                component="a"
                                className="h-full py-3 px-6 w-full justify-center items-center gap-x-2 text-sm font-medium border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full"
                                href="#">
                                <IconSearch stroke={3} className="size-5 shrink-0 mr-3" />
                                <Text fw="bold">Search</Text>
                            </Button>
                        </div>
                    </div>
                </form>

                <div className="hidden xl:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                    <svg
                        className="w-16 h-auto text-white"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                            stroke="currentColor"
                            stroke-width="10"
                            strokeLinecap="round"></path>
                        <path
                            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                            stroke="currentColor"
                            stroke-width="10"
                            strokeLinecap="round"></path>
                        <path
                            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                            stroke="currentColor"
                            stroke-width="10"
                            strokeLinecap="round"></path>
                    </svg>
                </div>

                <div className="hidden xl:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                    <svg
                        className="w-40 h-auto text-white"
                        viewBox="0 0 347 188"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                            stroke="currentColor"
                            stroke-width="7"
                            strokeLinecap="round"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
