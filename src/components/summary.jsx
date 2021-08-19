import React, { Component } from "react";

class order extends Component {
	state = {};
	render() {
		return (
			<div className="bg-[#b9cafd] sm:h-screen z-0">
			<img src="./images/pattern-background-mobile.svg" alt="" className="w-full invisible sm:visible md:invisible fixed" />
				<img
					className="w-full z-0 invisible md:visible fixed "
					src="./images/pattern-background-desktop.svg"
				/>

				<div className="z-20 absolute sm:h-screen w-full  flex flex-col justify-center items-center">
					<div className="w-full sm:w-1/2 xl:w-1/3 flex-col rounded-lg">
						<img
							className="w-full sm:rounded-t-xl"
							src="./images/illustration-hero.svg"
							alt="woman_dancing"
						/>
						{this.content()}
					</div>
				</div>
			</div>
		);
	}

	content() {
		return (
			<div className="text-center bg-white rounded-b-xl pb-8">
				<h1 className="text-3xl py-7">Order Summary</h1>
				<p className="text-md px-20 text-gray-600">
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like
				</p>

				<div className="mt-4 px-4 sm:px-12 ">
					<div
						className="mt-4 px-2 py-6 bg-[#F8F9FE] rounded-lg
							flex">
						<img
							src="./images/icon-music.svg"
							alt="icon-music"
							className="flex"
						/>
						<div
							className="ml-4 font-semibold text-gray-700 flex-auto ">
							<div className="flex flex-col">
								<p className="flex">Annual Plan</p>
								<p className="flex text-gray-400">$59.99/year</p>
							</div>
						</div>
						<div className="flex flex-row ">
							<a
								href="#"
								className="flex justify-center items-center text-indigo-800 font-semibold underline hover:no-underline hover:text-indigo-400 mr-4">
								Change
							</a>
						</div>
					</div>
				</div>
				<div className="mt-12 drop-shadow-2xl mx-12 py-3  bg-[#382AE1] rounded-lg hover:bg-[#766CF1]">
					<a href="#" className="inline-block text-white font-semibold ">
						Proceed to Payment
					</a>
				</div>
				<a
					className="mt-8 text-gray-400 font-semibold hover:text-gray-800 block"
					href="#">
					Cancel Order
				</a>
			</div>
		);
	}
}
const comp = 1;
export default order;
