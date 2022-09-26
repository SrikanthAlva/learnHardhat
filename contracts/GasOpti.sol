// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasOpti {
    uint256[] public arrayFunds;
    uint256 public totalFunds;

    constructor() {
        arrayFunds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }

    function optionA() external {
        for (uint256 i = 0; i < arrayFunds.length; i++) {
            totalFunds = totalFunds + arrayFunds[i];
        }
    } // 85787 //21447

    function optionB() external {
        uint256 _totalFunds;
        for (uint256 i = 0; i < arrayFunds.length; i++) {
            _totalFunds = _totalFunds + arrayFunds[i];
        }
        totalFunds = _totalFunds;
    }

    function optionC() external {
        uint256 _totalFunds;
        uint256[] memory _arrayFunds = arrayFunds;
        for (uint256 i = 0; i < _arrayFunds.length; i++) {
            _totalFunds = _totalFunds + _arrayFunds[i];
        }
        totalFunds = _totalFunds;
    }

    function unsafe_inc(uint256 x) private pure returns (uint256) {
        unchecked {
            return x + 1;
        }
    }

    function optionD() external {
        uint256 _totalFunds;
        uint256[] memory _arrayFunds = arrayFunds;
        for (uint256 i = 0; i < _arrayFunds.length; i = unsafe_inc(i)) {
            _totalFunds = _totalFunds + _arrayFunds[i];
        }
        totalFunds = _totalFunds;
    }
}
